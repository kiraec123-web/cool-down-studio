export function DemoBanner() {
  return (
    <div className="w-full border-b border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
      <p className="text-center text-xs text-yellow-300/80">
        <span className="font-semibold text-yellow-300">Demo mode</span> —
        outputs are pre-built from the Eedi + IM curriculum library. Add{" "}
        <code className="font-mono text-yellow-200">ANTHROPIC_API_KEY</code> to
        enable live Claude generation.
      </p>
    </div>
  );
}
