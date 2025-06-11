import { FaFutbol, FaBrain } from 'react-icons/fa';
import { GiCricketBat, GiTennisRacket, GiCardJoker, GiSpades } from 'react-icons/gi';

export default function LiveGames() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
          🎮 Play Skill-Based Games Across Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg font-medium text-white mb-6">
          <div className="flex flex-col items-center">
            <GiCricketBat className="text-4xl text-green-400 mb-2" />
            Cricket Fantasy
          </div>
          <div className="flex flex-col items-center">
            <FaFutbol className="text-4xl text-blue-400 mb-2" />
            Football Fantasy
          </div>
          <div className="flex flex-col items-center">
            <GiTennisRacket className="text-4xl text-pink-400 mb-2" />
            Tennis Fantasy
          </div>
          <div className="flex flex-col items-center">
            <FaBrain className="text-4xl text-yellow-300 mb-2" />
            Quiz Contests
          </div>
          <div className="flex flex-col items-center">
            <GiCardJoker className="text-4xl text-red-400 mb-2" />
            Teen Patti (Skill)
          </div>
          <div className="flex flex-col items-center">
            <GiSpades className="text-4xl text-purple-400 mb-2" />
            Rummy (Skill)
          </div>
        </div>

        <p className="text-zinc-300 text-base max-w-2xl mx-auto">
          All contests are based on <span className="text-yellow-400 font-semibold">skill</span>, not chance.
          Play fair, compete smart, and earn bonus points.
        </p>
      </div>
    </section>
  );
}
