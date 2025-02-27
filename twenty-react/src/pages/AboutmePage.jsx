import myImage from '../assets/bwsilvia.jpg';

export default function AboutmePage() {
    return (
        <>

            <section className='flex flex-col items-center justify-center min-h-screen text-center'>

                {/*  <img
                            src={myImage}
                            atl="silviav"
                            className="w-80 h-80 rounded-full mx-auto shadow-lg backdrop-blur-md">

                        </img> */}

                <h2 className="text-[8vw] md:text-[8vw] font-bold mt-4 leading-none"> Backend Developer</h2>
                <section className="mt-15">
                    <p> Hi, Im Silvia, Specializing in API Development, Cloud Solucions
                    </p>
                    <p>
                        Currently, I'm focused on improving my skills in Database Optimization.
                    </p>
                       <p className="mt-5">Follow my journey</p>


                </section>
                </section>

            </ >
            )
}