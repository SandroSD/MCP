import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// 1. Crear Servidor
// Es la interfaz principal con el protocolo MCP. Maneja la comunicación entre el cliente y el servidor.
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

// 2. Definir las herramientas
// Las herramientas le permite al LLM realizar acciones a través de tu servidor

server.tool(
  "fetch-weather", // título de la herramienta
  "Tool to fetch the weather of a city", // descripción de la herramienta
  {
    city: z.string().describe("City name"),
  },
  async ({ city }) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
    );

    const data = await response.json();

    if (data.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontró información para la ciudad: ${city}`,
          },
        ],
      };
    }

    const { latitude, longitude } = data.results[0];

    const weather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,is_day,rain`,
    );

    const wheatherData = await weather.json();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(wheatherData),
        },
      ],
    };
  },
);

async function main() {
  console.error("Demo MCP Server running on stdio");
  // 3. Escuchar las conexiones del cliente
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
