export function MeshGradient() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-40 bg-primary/60 mix-blend-multiply dark:mix-blend-screen animate-blob"
      />
      <div
        className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 bg-accent/60 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"
      />
      <div
        className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full blur-[150px] opacity-30 bg-primary/50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"
      />
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
    </div>
  )
}
