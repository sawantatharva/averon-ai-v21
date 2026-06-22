import { NextRequest, NextResponse } from "next/server";

const webhookUrl = process.env.N8N_CHAT_WEBHOOK_URL;

async function proxyToN8n(request: NextRequest) {
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Chat webhook is not configured." },
      { status: 503 },
    );
  }

  const body =
    request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.text();

  const upstream = await fetch(webhookUrl, {
    method: request.method,
    headers: {
      "Content-Type": request.headers.get("content-type") ?? "application/json",
    },
    body,
    cache: "no-store",
  });

  const responseBody = await upstream.text();

  return new NextResponse(responseBody, {
    status: upstream.status,
    headers: {
      "Content-Type":
        upstream.headers.get("content-type") ?? "application/json",
    },
  });
}

export async function HEAD() {
  if (!webhookUrl) {
    return new NextResponse(null, { status: 503 });
  }

  return new NextResponse(null, { status: 204 });
}

export async function GET(request: NextRequest) {
  return proxyToN8n(request);
}

export async function POST(request: NextRequest) {
  return proxyToN8n(request);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
