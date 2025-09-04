
function Hero() {
  return (
    <section
      className="
        relative overflow-hidden from-gray-900 via-amber-900/20 to-gray-900
        pt-28 md:pt-32 xl:pt-40 bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/back1.png')" }}
    >
      <div
        className="
          w-[92%] xl:w-[76%] max-w-6xl
          grid grid-cols-1 xl:grid-cols-[560px_auto] items-center gap-4 xl:gap-20
          mx-auto xl:mx-0 xl:ml-auto xl:mr-[9vw]
        "
        style={{ minHeight: "calc(90dvh - var(--header-h, 0px))" }}
      >
        <div className="w-full flex flex-col items-center xl:items-start text-center xl:text-left space-y-4 xl:space-y-[30px] order-1 xl:order-1 xl:mb-20">
          <h1 className="font-sora text-4xl lg:text-5xl font-extrabold leading-tight">
            Connectez-vous à{" "}
            <span className="whitespace-nowrap">
              <span
                className="font-sora font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
                style={{
                  filter: `
                    drop-shadow(0 0 20px rgba(255,148,79,1))
                    drop-shadow(0 0 60px rgba(255,122,26,0.8))
                    drop-shadow(0 0 100px rgba(255,148,79,1))
                  `,
                }}
              >
                l&apos;Afrique
              </span>{" "}
              qui{" "}
              <span
                className="font-sora font-black tracking-[-1.58px] text-[var(--text-orange-2,#FF944F)]"
                style={{
                  filter: `
                    drop-shadow(0 0 20px rgba(255,148,79,1))
                    drop-shadow(0 0 60px rgba(255,122,26,0.8))
                    drop-shadow(0 0 100px rgba(255,148,79,1))
                  `,
                }}
              >
                innove
              </span>
            </span>
          </h1>

          <p className="font-dm-sans text-[var(--text-grey-2,#D1D5DC)] text-base lg:text-lg xl:text-lg max-w-lg xl:max-w-xl leading-relaxed px-4 xl:px-0">
            UpAfrica révolutionne la façon dont la diaspora africaine et les
            entrepreneurs du continent collaborent. Découvrez des opportunités uniques,
            créez des partenariats stratégiques et participez à la transformation
            numérique de l&apos;Afrique.
          </p>

          <div className="w-full flex justify-center xl:hidden">
            <div
              className="relative h-[80vh] sm:h-[90vh] max-h-[850px] aspect-[9/19.5] animate-bounce-slow"
              style={{ width: "195%" }}
            >
              <img
                src="/hero.png"
                alt="UpAfrica App"
                className="object-contain drop-shadow-2xl absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-row gap-3 xl:gap-4 w-full justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] font-medium text-white gap-[6px] w-full sm:flex-1 whitespace-nowrap"
              style={{
                background: "var(--btn-base-orange, #FF7A1A)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.25)",
                  "0 10px 18px rgba(255,122,26,0.28)",
                ].join(", "),
              }}
            >
              <Download size={18} />
              Télécharger maintenant
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center h-12 xl:h-10 px-4 xl:px-4 rounded-lg text-[14px] xl:text-[14px] gap-[6px] font-medium text-white w-full sm:flex-1 whitespace-nowrap"
              style={{
                background: "var(--btn-base-grey, #232323)",
                boxShadow: [
                  "0 2px 6px rgba(0,0,0,0.25)",
                  "0 1px 20px rgba(237,109,11,0.20)",
                ].join(", "),
              }}
            >
                <Play size={18}/>
              Voir la démo
            </a>
          </div>

          <div className="flex flex-row justify-center xl:justify-start gap-2 xl:gap-4 w-full px-2 xl:px-0">
            {[
              { icon: Star, value: 50000, label: "Utilisateurs actifs", suffix: "+" },
              { icon: Globe, value: 500, label: "Entreprises", suffix: "+" },
              { icon: TrendingUp, value: 54, label: "Pays africains" },
            ].map(({ icon: Icon, value, label, suffix }) => (
              <div
                key={label}
                className="relative rounded-[14px] h-[75.5px] px-2 xl:px-3 py-2.5 flex items-center gap-[8px] xl:gap-[10px] select-none w-full sm:flex-1"
                style={{
                  background: "rgba(42,42,42,0.40)",
                  backdropFilter: "blur(14px) saturate(140%)",
                  WebkitBackdropFilter: "blur(14px) saturate(140%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: [
                    "0 8px 24px rgba(0,0,0,0.35)",
                    "inset 0 1px 0 rgba(255,255,255,0.08)",
                    "inset 0 -2px 8px rgba(0,0,0,0.35)",
                  ].join(", "),
                }}
              >
                <Icon
                  className="text-[var(--text-orange-3,#ED6D0B)] flex-shrink-0"
                  size={16}
                />
                <div className="text-left leading-tight min-w-0">
                  <p className="font-bold text-base xl:text-lg text-[var(--text-orange-3,#ED6D0B)] whitespace-nowrap">
                    <AnimatedCounter value={value} suffix={suffix} />
                  </p>
                  <p className="text-xs text-[var(--text-grey-2,#D1D5DC)] whitespace-nowrap">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden xl:flex w-full justify-start order-2 xl:order-2">
          <div className="relative h-[110dvh] lg:h-[130dvh] max-h-[920px] aspect-[9/19.5] animate-bounce-slow xl:w-[100%] xl:mb-8">
            <img
              src="/hero.png"
              alt="UpAfrica App"
              className="object-contain drop-shadow-2xl absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

