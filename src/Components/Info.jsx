const Info = () => {
  return (
    <>
      <div className="flex flex-col items-center py-8">
        <h2 className="text-2xl font-bold mb-8">WHY USE Splitster?</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-24">
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full"
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Pain-1-1.png?w=376&ssl=1"
              alt="Card 1"
            />
            <div className="px-6 py-4">
              <p className="text-black font-sans text-base">
                No more uncertainty about who’s in and who’s out
              </p>
              <p className="text-gray-400 font-sans text-base">
                Don’t waste time with different messaging and calendar apps.
                Chat and plan ALL IN one place.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full"
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Pain-2.png?w=376&ssl=1"
              alt="Card 2"
            />
            <div className="px-6 py-4">
              <p className="text-black font-sans text-base">
                No more last minute dropouts and no shows
              </p>
              <p className="text-gray-400 font-sans text-base">
                Say goodbye to ghosting, dropping out and no shows. Get everyone
                together with ALL IN.
              </p>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full"
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Pain-3-1.png?w=376&ssl=1"
              alt="Card 3"
            />
            <div className="px-6 py-4">
              <p className="text-black font-sans text-base">
                No more issues with settling up and bill splitting
              </p>
              <p className="text-gray-400 font-sans text-base">
                Track costs, receipts and expenses so everyone knows what they
                owe. Split bills through the ALL IN app.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto px-4">
        <p className="text-2xl font-bold mb-6 mt-12">
          Get everyone together without the headache with Splitster
        </p>
        <p className="text-center text-gray-400 mb-8">
          It’s tough to get everyone together for a night out. You want to go
          out with your friends, but they’re always busy and you can never get a
          date that works for everyone… All In is an app that lets you chat with
          your friends and make plans. You can even track the cost of the event
          and make sure everyone pays what they owe at the end of the day.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 mt-24">
        <div className="flex items-center mb-16">
          <div className="w-1/2 pr-4">
            <p className="text-xl font-bold mb-2">Plan</p>
            <p className="text-gray-700">
              Bring everyone together to plan holidays, festivals, sports
              events, gigs, dinners and more. See who’s in and who’s out and
              agree on times and dates so nobody misses out.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Plan-2.png?w=1016&ssl=1"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>

        <div className="flex items-center mb-16">
          <div className="w-1/2">
            <img
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Chat-web.png?w=1016&ssl=1"
              alt="Image 2"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
          <div className="w-1/2 pl-4">
            <p className="text-xl font-bold mb-2">Chat</p>
            <p className="text-gray-700">
              Forget Messenger, WhatsApp, iMessage and all the other chat apps.
              Avoid confusion and last-minute dropouts by getting everyone ALL
              IN and chatting in one place.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-16">
          <div className="w-1/2 pr-4">
            <p className="text-xl font-bold mb-2">Share</p>
            <p className="text-gray-700">
              Make lifelong memories along the way and share your pictures
              straight to the ALL IN app, so you can all relive those precious
              moments for years to come.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Share.png?w=1016&ssl=1"
              alt="Image 3"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>

        <div className="flex items-center mb-16">
          <div className="w-1/2">
            <img
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Trackpayments.png?w=1016&ssl=1"
              alt="Image 4"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
          <div className="w-1/2 pl-4">
            <p className="text-xl font-bold mb-2">Track</p>
            <p className="text-gray-700">
              Avoid fallouts over who owes what. Clearly track and split every
              cost, whether that’s for food, transport, hotels, drinks, or
              anything else! Know what you owe with ALL IN.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-16">
          <div className="w-1/2 pr-4">
            <p className="text-xl font-bold mb-2">Pay</p>
            <p className="text-gray-700">
              At the end of the day, settle up with ALL IN’s secure payment
              function, so you can make sure nobody is left fronting the costs
              for all those tequilas and taxis!
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://i0.wp.com/everyoneallin.com/wp-content/uploads/2022/09/Pay.png?w=1016&ssl=1"
              alt="Image 5"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
