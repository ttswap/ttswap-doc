import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ColorShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">New Color Palette</span>
          </h2>
          <p className="text-muted-foreground">
            Vibrant, energetic colors inspired by modern web3 design
          </p>
        </div>

        {/* Color Swatches */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center card-shadow">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary mb-4"></div>
            <h3 className="font-semibold text-primary">Primary Green</h3>
            <p className="text-sm text-muted-foreground">#10b981</p>
          </Card>
          
          <Card className="p-6 text-center card-shadow">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400 mb-4"></div>
            <h3 className="font-semibold text-yellow-600">Bright Yellow</h3>
            <p className="text-sm text-muted-foreground">#fbbf24</p>
          </Card>
          
          <Card className="p-6 text-center card-shadow">
            <div className="w-16 h-16 mx-auto rounded-full bg-secondary mb-4"></div>
            <h3 className="font-semibold text-secondary">Vibrant Orange</h3>
            <p className="text-sm text-muted-foreground">#f59e0b</p>
          </Card>
          
          <Card className="p-6 text-center card-shadow">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent mb-4"></div>
            <h3 className="font-semibold text-accent">Dynamic Red</h3>
            <p className="text-sm text-muted-foreground">#ef4444</p>
          </Card>
        </div>

        {/* Gradient Examples */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 card-shadow">
            <div className="gradient-primary h-24 rounded-lg mb-4"></div>
            <h3 className="font-semibold">Primary Gradient</h3>
            <p className="text-sm text-muted-foreground">Green to Yellow</p>
          </Card>
          
          <Card className="p-6 card-shadow">
            <div className="gradient-warm h-24 rounded-lg mb-4"></div>
            <h3 className="font-semibold">Warm Gradient</h3>
            <p className="text-sm text-muted-foreground">Yellow to Orange</p>
          </Card>
          
          <Card className="p-6 card-shadow">
            <div className="gradient-secondary h-24 rounded-lg mb-4"></div>
            <h3 className="font-semibold">Secondary Gradient</h3>
            <p className="text-sm text-muted-foreground">Orange to Red</p>
          </Card>
        </div>

        {/* Button Examples */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="gradient-primary text-white shadow-lg">
            Primary Action
          </Button>
          <Button className="gradient-warm text-white shadow-lg">
            Secondary Action
          </Button>
          <Button className="gradient-secondary text-white shadow-lg">
            Accent Action
          </Button>
          <Button className="gradient-full text-white shadow-lg">
            Full Spectrum
          </Button>
        </div>
      </div>
    </section>
  );
}