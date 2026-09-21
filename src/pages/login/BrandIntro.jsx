import logo from '../../assets/login/tajweed_classes_logo_exact.svg'
import heart from '../../assets/login/heart.svg'
import expertTeachers from '../../assets/login/expert-teachers.svg'
import liveClasses from '../../assets/login/live-classes.svg'
import trackProgress from '../../assets/login/track-progress.svg'
import safeSecure from '../../assets/login/safe-secure.svg'

const features = [
  { icon: expertTeachers, title: 'Expert Teachers', text: 'Qualified & experienced Quran teachers' },
  { icon: liveClasses, title: 'Live Classes', text: 'One-on-one interactive online classes' },
  { icon: trackProgress, title: 'Track Progress', text: "Monitor your child's learning progress" },
  { icon: safeSecure, title: 'Safe & Secure', text: 'A safe learning environment for your child' },
]

export default function BrandIntro() {
  return (
    <section className="flex flex-col items-center rounded-3xl text-center max-sm:bg-canvas/80 max-sm:px-4 max-sm:py-6 max-sm:backdrop-blur-sm lg:items-start lg:text-left">
      <img src={logo} alt="Tajweed Classes" width="2048" height="741" className="h-auto w-52 max-w-full sm:w-60 lg:w-72" />

      <h1 className="mt-8 flex flex-wrap items-center justify-center gap-x-2 font-display text-[1.65rem] font-bold text-brand-deep sm:text-3xl lg:mt-10 lg:justify-start lg:text-[2rem]">
        <img src={heart} alt="" className="size-6 sm:size-7" />
        <span>Love Quran,</span>
        <span aria-hidden="true" className="text-2xl sm:text-[1.7rem]">📖</span>
        <span>Learn Quran</span>
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-slate sm:text-[1.05rem]">
        Professional online Quran learning for kids with Tajweed, Tarbiyah and Islamic Values.
      </p>

      <ul className="mt-8 grid w-full max-w-md grid-cols-1 gap-x-8 gap-y-6 text-left sm:grid-cols-2 lg:mt-10">
        {features.map(({ icon, title, text }) => (
          <li key={title} className="group flex items-start gap-3">
            <img
              src={icon}
              alt=""
              className="size-11 shrink-0 transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-105 sm:size-12"
            />
            <div>
              <h2 className="font-sans text-[0.95rem] font-semibold text-ink">{title}</h2>
              <p className="mt-0.5 text-[0.8rem] leading-snug text-slate">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
