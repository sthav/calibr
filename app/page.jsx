import CustomButton from '@/components/CustomButton'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden max-w-screen-2xl mx-auto  items-center">
      <Hero />
      <div className="client ">
        <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
          {/* First Section */}
          <div className="py-8">
            <h1 className="text-3xl font-inter font-semibold text-center text-4xl lg:text-5xl leading-11 mt-8">
              Our Clients
            </h1>

            <p className="font-inter text-base font-normal leading-6 text-center text-gray-700 mt-4 mb-12">
              We have been working with some Fortune 500+ clients
            </p>

            <div className="flex justify-center items-center mt-4 max-w-screen-xl mx-auto">
              {/* Icon 1 */}
              <Image
                src="/Vector.png"
                alt="Icon 1"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 2 */}
              <Image
                src="/Vector1.png"
                alt="Icon 2"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 3 */}
              <Image
                src="/Logo2.png"
                alt="Icon 3"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 4 */}
              <Image
                src="/Logo1.png"
                alt="Icon 4"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 5 */}
              <Image
                src="/Logo7.png"
                alt="Icon 5"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 6 */}
              <Image
                src="/Logo4.png"
                alt="Icon 6"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />

              {/* Icon 7 */}
              <Image
                src="/Logo5.png"
                alt="Icon 7"
                width={32}
                height={32}
                className="w-8 h-8 mx-20"
              />
            </div>
          </div>


          {/* Second Section */}
          <div className="py-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Manage your entire community <br />
              in a single system
            </h1>
            <p className='mb-4'>Who is Nextcent suitable for?
            </p>
          </div>

          {/* Third Section with Columns */}
          <div className="py-8 flex justify-center mb-16">
            {/* Column 1 */}
            <div className="mx-4 max-w-xs bg-white p-4 rounded-md shadow-md">
              <Image
                src="/Iconm1.png"
                alt="Icon 1"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2 leading-tight mb-3">Membership <br /> Organisations</h2>
              <p className='leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            {/* Column 2 */}
            <div className="mx-4 max-w-xs bg-white p-4 rounded-md shadow-md">
              <Image
                src="/Iconm2.png"
                alt="Icon 2"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2 leading-tight mb-3">National <br /> Associations</h2>
              <p className='leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>

            {/* Column 3 */}
            <div className="mx-4 max-w-xs bg-white p-4 rounded-md shadow-md">
              <Image
                src="/Iconm3.png"
                alt="Icon 3"
                width={52}
                height={52}
                className="mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2 leading-tight mb-3">Clubs And <br /> Groups</h2>
              <p className='leading-tight'>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          </div>


          {/* Fourth Section with Image and Text */}
          <div className="py-8 flex justify-center items-center">
            {/* Left Half for Image */}
            <div className="w-1/3">
              <Image
                src="/rafiki.png"
                alt="Image"
                width={391}
                height={407}
                className=""
              />
            </div>

            {/* Right Half for Text */}
            <div className="w-1/2 text-left p-">
              <h1 className="text-3xl font-semibold mb-4 ">The unseen of spending three years at Pixelgrade</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar,
                aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
              <div className='mt-8  '>
                <CustomButton
                  title="Learn More"
                  containerStyles="bg-green-500 text-white block w-32 py-2 px-1 text-sm rounded-sm mt-4"
                />
              </div>

            </div>
          </div>
        </div>

        <div className="numbers bg-gray-200">
          {/* New Structure 2 */}
          <div className="container mx-auto py-20 flex justify-between max-w-screen-xl mx-auto items-center">
            {/* Left Half */}
            <div className="w-1/2">
              <h1 className="text-3xl font-inter font-semibold">Helping a local </h1>
              <h2 className="text-3xl font-inter font-semibold mt-2"><span className="text-green-500">business reinvent itself</span></h2>
              <p className="text-#18191F-400 mt-2">We reached here with our hard work and dedication</p>
            </div>

            {/* Right Half */}
            <div className="w-4/3">
              <Image
                src="/Counts.png"
                alt="Image"
                width={391}
                height={407}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>


        <div className="section-desgin">
          {/* New Section */}
          <div className="py-14 flex  max-w-screen-xl mx-auto items-center  ">
            {/* Left Half for Image */}
            <div className="w-1/3 p-4">
              <Image
                src="/pana.png"
                alt="Image"
                width={391}
                height={407}
                className=""
              />
            </div>

            {/* Right Half for Text */}
            <div className="w-2/3 p-2 ml-40">
              <h1 className="text-3xl font-semibold mb-4">How to design your site footer like <br /> we did</h1>
              <p className=''>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur
                faucibus ipsum id gravida.
              </p>
              <div className='mt-6'>
                <CustomButton
                  title="Learn More"
                  containerStyles="bg-green-500 text-white block w-32 py-2 px-1 text-sm rounded-sm mt-4"
                />
              </div>

            </div>
          </div>
        </div>



        <div className="section-cust bg-gray-200">
          {/* New Section */}
          <div className="py-8 flex justify-between max-w-screen-xl mx-auto text-center">
            {/* Left Half for Image */}
            <div className="w-1/3">
              <Image
                src="/image9.png"
                alt="Image"
                width={391}
                height={407}
                className=""
              />
            </div>

            {/* Right Half for Text and Icons */}
            <div className="w-2/3 text-left p-4 ml-40 ">
              <p className='mb-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <p className='mb-3'>
                <span className="text-green-500 font-bold mb-4">Tim Smith</span>
              </p>
              <p className='mb-6 text-[#89939E]'>British Dragon Boat Racing Association</p>
              <div className="flex items-center">
                {/* Single Image */}
                <div className="mr-2">
                  <Image
                    src="/Frame10.png"
                    alt="Image"
                    width={302}
                    height={12}
                  // className="w-60 h-10"
                  />
                </div>


                <a href="#" className="text-green-500 hover:underline ml-4">Meet all customers &rarr;</a>
              </div>

            </div>
          </div>
        </div>




        <div className="section-marketing ">
          {/* New Section marketing */}
          <div className="section-marketing max-w-screen-xl mx-auto text-center mb-48">
            {/* Title and Paragraph */}
            <div className="text-center py-8">
              <h1 className="text-3xl font-semibold mb-4">Caring is the new marketing</h1>
              <p className="max-w-xl  mx-auto">
                The Nexcent blog is the best place to read about the latest membership
                insights, trends and more. See who&apos;s joining the community, read about
                how our community are increasing their membership income and lot&apos;s more.
              </p>
            </div>


            {/* images */}

            <div className="flex justify-center items-center">
              {/* Image 1 */}
              <div className="relative mx-1">
                <Image
                  src="/image18.png"
                  alt="Image 1"
                  width={302}
                  height={202}
                  className="w-62 h-62 mx-2"
                />
                <div className="absolute bottom-0 left-10 bg-white p-4 shadow-md flex-col  text-center w-60 h-36 transform translate-y-1/2 flex  items-center rounded-lg">
                  <p className="text-gray-600 font-semibold mb-4 leading-tight">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <a href="#" className="text-green-600 hover:underline text-md">Readmore &rarr;</a>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative mx-1">
                <Image
                  src="/image19.png"
                  alt="Image 2"
                  width={302}
                  height={202}
                  className="w-62 h-62 mx-2"
                />
                <div className="absolute bottom-0 left-10 bg-white p-4 shadow-md flex-col bg-#ABBED166 text-center w-60 h-36 transform translate-y-1/2 flex  items-center rounded-lg">
                  <p className="text-gray-600 font-semibold mb-4 leading-tight">What are your safeguarding responsibilities and how can you manage them?</p>
                  <a href="#" className="text-green-600 hover:underline text-md">Readmore &rarr;</a>
                </div>

              </div>

              {/* Image 3 */}
              <div className="relative mx-1">
                <Image
                  src="/image20.png"
                  alt="Image 3"
                  width={302}
                  height={202}
                  className="w-62 h-62 mx-2"
                />
                <div className="absolute bottom-0 left-10 bg-white p-4 shadow-md flex-col  text-center w-60 h-36 transform translate-y-1/2 flex  items-center rounded-lg">
                  <p className="text-gray-600 font-semibold mb-4 leading-tight">Revamping the Membership Model with Triathlon Australia</p>
                  <a href="#" className="text-green-600 hover:underline text-md">Readmore &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="section-demo py-5 flex flex-col items-center bg-gray-200">
          {/* New Section */}
          <div className="py-6 text-center max-w-screen-xl mx-auto flex flex-col justify-center items-center">
            {/* Title */}
            <h1 className="text-5xl font-semibold leading-tight">Pellentesque suscipit <br />fringilla libero eu.</h1>

            {/* Custom Button */}
            <CustomButton
              title="Get a Demo &rarr;"
              containerStyles="bg-green-500 text-white block w-32 py-2 px-1 text-sm rounded-sm mt-8"
            />
          </div>
        </div>
      </div>


    </main>
  )
}
