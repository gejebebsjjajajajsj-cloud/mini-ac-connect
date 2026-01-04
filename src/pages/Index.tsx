import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/5516998218247?text=OLA%20CLIMA%20FORT%20GOSTARIA%20DE%20COMORAR%20O%20MINI%20AR-CONDICIONADO%20";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-md">
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
          Mini Ar-Condicionado Clima Fort
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Clique no botão abaixo para falar diretamente com a Clima Fort pelo WhatsApp e garantir o seu.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full text-base"
          aria-label="Chamar no WhatsApp para comprar o mini ar-condicionado"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </section>
    </main>
  );
};

export default Index;
