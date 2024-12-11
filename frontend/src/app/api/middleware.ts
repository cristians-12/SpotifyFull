// typescript
import { NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  const { headers } = request;
  if (headers.get("x-api-key") !== "zoomba") {
    return Response.json(null, {
      status: 400,
      statusText: "Unauthorized request",
    });
  }
};

export default middleware;
