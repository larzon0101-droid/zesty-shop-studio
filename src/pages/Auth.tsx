import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>

        <form className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          {!isLogin && (
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" />
            </div>
          )}

          <Button type="submit" className="w-full">
            {isLogin ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="underline hover:opacity-70"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>

        <p className="text-center mt-4 text-xs text-muted-foreground">
          Note: Authentication requires backend setup
        </p>
      </div>
    </div>
  );
};

export default Auth;
