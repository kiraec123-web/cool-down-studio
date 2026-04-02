export function DemoBanner() {
  return (
    <div className="w-full border-b border-[--il-purple-border] bg-[--il-purple-muted] px-4 py-2">
      <p className="text-center text-xs text-[--il-purple]">
        <span className="font-semibold">Demo mode</span> — outputs are
        pre-built from a general understanding of publicly available knowledge
        on the Eedi + IM curriculum library. Add{" "}
        <code className="font-mono bg-white/60 px-1 rounded">
          ANTHROPIC_API_KEY
        </code>{" "}
        in Vercel env vars to enable live AI generation.
      </p>
    </div>
  );
}
