import { useState } from 'react'
import { IconEyeOff } from '@tabler/icons-react'
import formLogo from '../../assets/login/login_form_logo_exact.svg'
import userIcon from '../../assets/login/user.svg'
import lockIcon from '../../assets/login/lock.svg'
import eyeIcon from '../../assets/login/eye.svg'
import arrowRight from '../../assets/login/arrow-right.svg'
import googleG from '../../assets/login/google-g.svg'
import microsoft from '../../assets/login/microsoft.svg'
import MaskIcon from './MaskIcon.jsx'

const linkClass =
  'rounded font-medium text-brand transition-colors hover:text-brand-deep hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const inputClass =
  'h-full min-w-0 flex-1 bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-slate/70'

const socialClass =
  'flex h-12 items-center justify-center gap-2.5 rounded-xl border border-line bg-white px-3 text-sm font-medium text-ink transition duration-200 hover:border-brand/40 hover:bg-mint/50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-safe:hover:-translate-y-0.5'

function Field({ id, label, icon, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="flex h-12 items-center gap-3 rounded-xl border border-line bg-white px-4 transition-colors focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20 hover:border-brand/50">
        <img src={icon} alt="" className="size-5 shrink-0" />
        {children}
      </div>
    </div>
  )
}

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)

  return (
    <div className="w-full max-w-[34rem] rounded-[1.75rem] border border-white/80 bg-white px-6 py-8 shadow-[0_24px_60px_-20px_rgba(20,50,40,0.28)] sm:px-10 sm:py-8">
      <div className="flex flex-col items-center text-center">
        <img src={formLogo} alt="Tajweed Classes" width="769" height="742" className="h-auto w-20 sm:w-24" />
        <h2 className="mt-3 font-sans text-[1.8rem] font-bold text-brand-deep sm:text-[2rem]">Welcome Back!</h2>
        <p className="mt-1 text-[0.95rem] text-slate">Sign in to your Tajweed Classes account</p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
        <Field id="login-identifier" label="Email or Username" icon={userIcon}>
          <input
            id="login-identifier"
            name="identifier"
            type="text"
            autoComplete="username"
            placeholder="Enter your email or username"
            className={inputClass}
          />
        </Field>

        <Field id="login-password" label="Password" icon={lockIcon}>
          <input
            id="login-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            className="-mr-2 grid size-10 shrink-0 place-items-center rounded-lg transition-colors hover:bg-mint focus-visible:outline-2 focus-visible:outline-brand"
          >
            {showPassword ? (
              <IconEyeOff size={22} stroke={1.8} className="text-slate" aria-hidden="true" />
            ) : (
              <img src={eyeIcon} alt="" className="size-[1.4rem]" />
            )}
          </button>
        </Field>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="relative flex cursor-pointer items-center gap-2 font-medium text-brand">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="peer size-[1.1rem] cursor-pointer appearance-none rounded-[0.3rem] border border-brand/60 bg-white transition-colors checked:border-brand checked:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            />
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="pointer-events-none absolute left-[0.1rem] size-[0.9rem] text-white opacity-0 peer-checked:opacity-100"
            >
              <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Remember me
          </label>
          <button type="button" className={linkClass}>
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-brand-deep text-base font-semibold text-white shadow-[0_10px_22px_-12px_rgba(8,112,82,0.9)] transition duration-200 hover:bg-brand hover:shadow-[0_14px_26px_-12px_rgba(8,112,82,0.95)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:translate-y-px motion-safe:hover:-translate-y-0.5"
        >
          Sign In
          <MaskIcon
            src={arrowRight}
            className="size-5 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
          />
        </button>
      </form>

      <div className="my-5 flex items-center gap-4 text-sm text-slate">
        <span className="h-px flex-1 bg-line" />
        or continue with
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button type="button" className={socialClass}>
          <img src={googleG} alt="" className="size-5" />
          Continue with Google
        </button>
        <button type="button" className={socialClass}>
          <img src={microsoft} alt="" className="size-5" />
          Continue with Microsoft
        </button>
      </div>

      <p className="mt-5 text-center text-sm text-slate">
        Don&apos;t have an account?{' '}
        <button type="button" className={linkClass}>
          Contact your academy admin
        </button>
      </p>
    </div>
  )
}
