import { NextResponse } from "next/server";
import { fetchGitHubTelemetry } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchGitHubTelemetry("philippft");
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch telemetry" }, { status: 500 });
  }
}
