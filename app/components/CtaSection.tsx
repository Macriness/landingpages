"use client";
import Image from "next/image";
import { Star, Users, Globe, Building2, BarChart3, Play, Apple, Download, Shield, Zap, RefreshCw } from "lucide-react";
import { Button } from "@heroui/react";

export default function CtaSection() {
  return (
    <div className=" from-[#0f0f11] via-[#1a1a1e] to-[#0f0f11] text-white">
      
      {/* Main CTA Section */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Stars */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-orange-400">
                4.9/5 - Plus de 50 000 téléchargements
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Prêt à transformer
                <br />
                votre avenir ?
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Rejoignez des milliers d'entrepreneurs africains qui 
                utilisent déjà UpAfrica pour développer leurs projets 
                et créer des partenariats durables.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="h-14 px-4 bg-black border border-white/20 rounded-lg hover:bg-gray-900 transition-all duration-300 justify-start"
                startContent={
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Play size={18} className="fill-white text-white" />
                  </div>
                }
              >
                <div className="flex flex-col items-start ml-2 text-left">
                  <span className="text-xs text-gray-400">Télécharger sur</span>
                  <span className="text-sm font-semibold text-white">Google Play</span>
                </div>
              </Button>

              <Button
                size="lg"
                className="h-14 px-4 bg-black border border-white/20 rounded-lg hover:bg-gray-900 transition-all duration-300 justify-start"
                startContent={
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Apple size={18} className="text-white" />
                  </div>
                }
              >
                <div className="flex flex-col items-start ml-2 text-left">
                  <span className="text-xs text-gray-400">Télécharger sur</span>
                  <span className="text-sm font-semibold text-white">App Store</span>
                </div>
              </Button>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              Disponible sur iOS 15+ et Android 7+
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <FeatureCard 
                icon={<Download size={20} />} 
                title="Téléchargement gratuit"
                subtitle="Application entièrement gratuite avec toutes les fonctionnalités"
                iconColor="text-orange-400"
              />
              <FeatureCard 
                icon={<Users size={20} />} 
                title="Réseau Vérifié"
                subtitle="Tous les membres sont vérifiés pour garantir la qualité"
                iconColor="text-orange-400"
              />
              <FeatureCard 
                icon={<Shield size={20} />} 
                title="Sécurisé"
                subtitle="Vos données sont protégées avec un chiffrement bancaire"
                iconColor="text-orange-400"
              />
              <FeatureCard 
                icon={<Zap size={20} />} 
                title="Mises à jour"
                subtitle="Nouvelles fonctionnalités ajoutées chaque mois"
                iconColor="text-orange-400"
              />
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-red-600/20 rounded-[40px] blur-3xl scale-110 opacity-60" />
              
              {/* Phone Container */}
              <div className="relative w-[300px] h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2e] to-[#1a1a1e] rounded-[40px] border border-white/20 shadow-2xl p-2">
                  <div className="w-full h-full bg-gradient-to-b from-orange-500 via-orange-600 to-red-600 rounded-[32px] p-[1px]">
                    <div className="w-full h-full bg-[#1a1a1e] rounded-[30px] relative overflow-hidden">
                      
                      {/* Phone Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-purple-600/30 to-orange-600/20">
                        <div className="p-6 h-full flex flex-col">
                          
                          {/* Status Bar */}
                          <div className="flex items-center justify-between mb-8 pt-2">
                            <div className="text-white text-sm font-medium">9:41</div>
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-2 border border-white/50 rounded-sm">
                                <div className="w-full h-full bg-white/80 rounded-sm"></div>
                              </div>
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                            
                            {/* Logo */}
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                              <span className="text-white font-bold text-2xl">U</span>
                            </div>

                            {/* App Name */}
                            <div className="text-center">
                              <h3 className="text-white font-bold text-2xl mb-2">UpAfrica</h3>
                              <p className="text-white/80 text-sm px-4 leading-relaxed">
                                L'innovation africaine à portée de main
                              </p>
                            </div>

                            {/* Illustration - People silhouettes */}
                            <div className="relative w-32 h-20 mb-8">
                              <div className="absolute bottom-0 left-4 w-8 h-12 bg-gradient-to-t from-orange-600/80 to-orange-400/60 rounded-t-full"></div>
                              <div className="absolute bottom-0 left-12 w-10 h-16 bg-gradient-to-t from-orange-700/90 to-orange-500/70 rounded-t-full"></div>
                              <div className="absolute bottom-0 right-12 w-8 h-14 bg-gradient-to-t from-orange-600/80 to-orange-400/60 rounded-t-full"></div>
                              <div className="absolute bottom-0 right-4 w-6 h-10 bg-gradient-to-t from-orange-500/70 to-orange-300/50 rounded-t-full"></div>
                            </div>

                            {/* CTA Button */}
                            <Button 
                              size="lg"
                              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl h-12 hover:bg-white/30 transition-all duration-300"
                            >
                              Commencer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-white/10 bg-gradient-to-r from-[#0f0f11] to-[#1a1a1e]">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-white">Restez connecté à l'innovation africaine</h3>
              <p className="text-gray-400">
                Recevez les dernières nouvelles, opportunités et insights du 
                continent africain directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="px-4 py-3 bg-[#2a2a2e] border border-white/10 rounded-lg text-white placeholder-gray-500 w-72 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <Button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                S'abonner
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-white/10 bg-[#0f0f11]">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            
            {/* UpAfrica Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">U</span>
                </div>
                <span className="text-xl font-bold text-white">UpAfrica</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                La première plateforme qui connecte les entrepreneurs africains avec les investisseurs du continent. Ensemble, nous construisons l'avenir de l'Afrique.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-400">✉</span>
                  <span className="text-gray-400">contact@upafrica.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-400">📞</span>
                  <span className="text-gray-400">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-orange-400">📍</span>
                  <span className="text-gray-400">Paris, France et Lagos, Nigéria</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-4">
                <a href="#" className="w-8 h-8 bg-[#2a2a2e] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-white text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2e] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-white text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2e] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-white text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2e] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-white text-sm">ig</span>
                </a>
                <a href="#" className="w-8 h-8 bg-[#2a2a2e] rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <span className="text-white text-sm">yt</span>
                </a>
              </div>
            </div>

            {/* Produits Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg mb-4">Produit</h4>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Fonctionnalités</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Tarifs</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Sécurité</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Mises à jour</a>
              </div>
            </div>

            {/* Entreprise Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg mb-4">Entreprise</h4>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">À propos de nous</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Carrières</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Blog</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Partenaires</a>
              </div>
            </div>

            {/* Légal Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white text-lg mb-4">Légal</h4>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Confidentialité</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Conditions</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Cookies</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-orange-400 transition-colors">Licences</a>
              </div>
            </div>
          </div>

          {/* Presence Section */}
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-orange-400 mb-8">Notre présence en Afrique</h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <CountryFlag country="Nigeria" users="15 000+" flag="🇳🇬" />
              <CountryFlag country="Kenya" users="8 000+" flag="🇰🇪" />
              <CountryFlag country="Afrique du Sud" users="12 000+" flag="🇿🇦" />
              <CountryFlag country="Ghana" users="6 000+" flag="🇬🇭" />
              <CountryFlag country="Sénégal" users="3 000+" flag="🇸🇳" />
              <CountryFlag country="Éthiopie" users="4k+" flag="🇪🇹" />
              <CountryFlag country="Rwanda" users="4k+" flag="🇷🇼" />
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 UpAfrica. Tous droits réservés. Construisons ensemble l'avenir de l'Afrique.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-400 transition-colors">Politique de confidentialité</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Conditions d'utilisation</a>
              <span>•</span>
              <a href="#" className="hover:text-orange-400 transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  subtitle,
  iconColor = "text-orange-400"
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string;
  iconColor?: string;
}) {
  return (
    <div className="p-4 rounded-xl bg-[#1a1a1e] border border-white/10 
                    shadow-[8px_8px_24px_rgba(0,0,0,0.4),-4px_-4px_16px_rgba(255,255,255,0.02)]
                    hover:shadow-[12px_12px_32px_rgba(0,0,0,0.6),-6px_-6px_20px_rgba(255,255,255,0.04)]
                    transition-all duration-300 group cursor-pointer">
      <div className="space-y-3">
        <div className={`w-10 h-10 rounded-lg ${iconColor} 
                        group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm mb-1">{title}</h4>
          <p className="text-xs text-gray-400 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function CountryFlag({ country, users, flag }: { country: string; users: string; flag: string }) {
  return (
    <div className="text-center space-y-2 group cursor-pointer">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{flag}</div>
      <div className="text-orange-400 font-semibold text-sm">{users}</div>
      <div className="text-gray-500 text-xs">{country}</div>
    </div>
  );
}