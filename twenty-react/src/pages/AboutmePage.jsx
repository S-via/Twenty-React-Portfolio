import myImage from '../assets/bwsilvia.jpg';

export default function AboutmePage() {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <section>
                        {/* Photo avatar goes here */}
                        {/* <img
                            src={myImage}
                            atl="silviav"
                            className="w-80 h-70 rounded-full mx-auto shadow-lg backdrop-blur-md">

                        </img> */}

                        <h2 className="text-3xl font-bold mt-6">Backend Developer</h2>
                        <p className="mt-4 text-lg">
                            Hi, Im Silvia, specializing in API Development, cloud solucions
                        </p>
                        <p className="mt-2 text-lg">
                            Currently, I'm focused on improving my skills in Database optimization.
                        </p>


                    </section>
                </div>
            </div >
        </div >
    )
}