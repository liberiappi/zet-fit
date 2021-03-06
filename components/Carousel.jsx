import Image from "next/image";
import Link from "next/link";

export default function Carousel() {
  return (
    <div className="w-full h-full overflow-x-hidden py-10">
      <div className="pb-8 px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          It&lsquo;s Time To Get Fit
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed whitespace-pre-line">
          People usually confused when it&lsquo;s time planning a workout
          program for them. Many people think that building muscle can only be
          done on a gym and with equipment. It&lsquo;s time to change that
          perspective! We provide you a workout plan based on your time, level,
          muscle group and type. Having a healthy and fit body is everybody
          rights.
        </p>
        <p className="my-8 text-3xl font-semibold text-sky-600 underline underline-offset-1 decoration-sky-600 hover:decoration-sky-800 hover:text-sky-800 transition duration-300">
          <Link href="/workout">Get fit with us now!</Link>
        </p>
      </div>
      <div className="w-full h-[32em] block md:flex overflow-hidden md:overflow-visible justify-center items-center">
        <div className="w-full md:w-1/2 text-center mb-4">
          <h1 className="font-semibold text-xl mb-3">Welcome to EZ-Fit</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
            facilis animi nesciunt? Dolorem perferendis, quas sapiente itaque
            dolor, iure alias reiciendis esse dignissimos eligendi excepturi,
            tempore fugiat quidem tempora. Nobis.
          </p>
        </div>
        <div className="flex-shrink-0 h-full md:w-1/2 relative md:hover:scale-105 hover:opacity-90 transition duration-150">
          <Image
            placeholder="blur"
            optimized="1"
            quality="100"
            blurDataURL="/img/pict-1-blur.jpg"
            alt="Fit"
            layout="fill"
            objectFit="cover"
            src="/img/pict-1.jpg"
          />
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Link href="/workout">
          <a className="capitalize py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 hover:scale-105">
            Get my workout plan
          </a>
        </Link>
      </div>
    </div>
  );
}
