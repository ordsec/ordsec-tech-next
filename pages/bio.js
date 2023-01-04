/* eslint-disable react/jsx-no-target-blank */
import Navbar from "../components/Navbar";

const Bio = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-4">
      <Navbar />
      <div className="mx-4 mt-4 p-6 bg-white shadow-lg rounded-xl lg:w-1/2 lg:mx-auto">
        <h2 className="text-xl mb-4 md:text-2xl">Hi there, and thanks for stopping by!</h2>
        <div className="text-justify">
          <p className="pb-3 leading-5">I am a professional classical musician, and I have been obsessed with computers and everything tech for most of my life. While my formal education is in classical flute performance, I take pride in having extensive skills with computers, from building desktop PC&apos;s to writing web applications - and now the focus of my career expansion is cybersecurity, which to me is an incredibly exciting field, one where I believe I can put all of my computer-related skills to use.</p>
          <p className="pb-3 leading-5">So how does a musician end up in tech? Well, as I&apos;ve mentioned, my infatuation with computers began around the same time as when I started my musical studies at age 5, and it has been &quot;running in the background&quot; throughout my school and college years, <em>occasionally</em> getting in the way of things. I picked up programming a few years before entering the Coding Dojo Cybersecurity Bootcamp this year, so before making this commitment, I&apos;ve had plenty of experience with multiple programming languages. I&apos;ve built CLI and web apps and I&apos;ve taken a couple of deep dives into Computer Science, where I studied data structures and algorithms with implementations in Java and JS, in addition to having some experience with C. One of my most recent coding projects is this very website you are currently visiting :-)</p>
          <p className="pb-3 leading-5">Now that I am studying cybersecurity, I am fascinated by both the offensive and the defensive side. I equally enjoy learning about complex defensive systems, mechanisms, and ways of thinking and about various types of attacks on web apps, networks, and operating systems. You can learn about specifics from my <a className="text-teal-600 font-bold" target="_blank" href="https://rebrand.ly/px3uw5m">resume</a>.</p>
          <p className="pb-3 leading-5">In all of the work I do, I have a creative approach to problem solving, which comes from my arts education, combined with a precise algorithmic approach that I have honed over the years of learning programming. I have a highly curious mind that always seeks a thorough understanding of what I am working with, and I firmly believe that a perfect balance can be found between versatility and high-level skill.</p>
          <p className="pb-3 leading-5">A few more facts about me. I was born in Ukraine, and I moved to the US at age 17 to attend high school. I have a Bachelor&apos;s and Master&apos;s degrees in flute performance from the Mannes School of Music at The New School. In addition to music and tech, I have almost 20 years of experience in photography, with my current passion being vintage cameras and analog photography. I enjoy road cycling, hiking, movies, and books, and I live in Brooklyn, NY, with my wife and our shiba inu by the name of Simba, who is goodest boy ever.</p>
        </div>
        <div className="flex justify-center my-4">
          <img className="rounded-full max-w-xs" src="/img/simba.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bio;