import background from '../../assets/login/background_img.png'
import BrandIntro from './BrandIntro.jsx'
import QuoteBlock from './QuoteBlock.jsx'
import LoginCard from './LoginCard.jsx'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -left-[2%] right-0 bg-cover bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      />

      <main className="relative mx-auto flex min-h-screen max-w-[90rem] flex-col">
        <div className="grid flex-1 grid-cols-1 items-start gap-10 px-5 pb-6 pt-10 sm:px-10 lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-6 lg:pl-[8vw] lg:pr-[5vw] lg:pb-4 lg:pt-12">
          <div className="lg:col-start-1 lg:row-start-1">
            <BrandIntro />
          </div>

          <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-end lg:self-center">
            <LoginCard />
          </div>

          <div className="flex justify-center lg:col-start-1 lg:row-start-2 lg:justify-start lg:self-end">
            <QuoteBlock />
          </div>
        </div>

        <footer className="relative px-5 pb-5 text-center text-sm text-white/85 sm:px-10">
          © 2024 Tajweed Classes. All rights reserved.
        </footer>
      </main>
    </div>
  )
}
