import quoteMarks from '../../assets/login/quote-marks.svg'
import MaskIcon from './MaskIcon.jsx'

export default function QuoteBlock() {
  return (
    <figure className="relative w-full max-w-[26rem] rounded-2xl border border-white/15 bg-black/15 px-9 py-4 text-white">
      <MaskIcon src={quoteMarks} className="absolute left-3 top-3 size-6 text-gold/80" />
      <blockquote className="text-[0.9rem] leading-relaxed sm:text-[0.95rem]">
        The best among you are those who learn the Quran and teach it.
      </blockquote>
      <figcaption className="mt-1 text-[0.8rem] font-medium text-gold">– Sahih Bukhari</figcaption>
      <MaskIcon src={quoteMarks} className="absolute bottom-3 right-3 size-6 rotate-180 text-gold/80" />
    </figure>
  )
}
