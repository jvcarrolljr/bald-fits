import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
        <div class="grid grid-cols-3 gap-4">
            <div class="card card-bordered card-compact w-auto bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">
                            <Link className="text-base-content text-opacity-40" to={`/Looks`}>
                                Genre
                            </Link>
                        </button>
                        <button class="btn btn-primary">
                            <Link className="text-base-content text-opacity-40" to={`/look`}>
                                Look
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card card-bordered card-compact w-auto bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Genre</button>
                        <button class="btn btn-primary">Look</button>
                    </div>
                </div>
            </div>
            <div class="card card-bordered card-compact w-auto bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Genre</button>
                        <button class="btn btn-primary">Look</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home