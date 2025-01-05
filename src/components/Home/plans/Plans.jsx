// Plans

export default function Plans() {
  return (
    <div className="space-y-4">
      <div className="
        flex max-w-fit
        text-xl antialiased font-medium
      ">
        Plans
      </div>

      <div className="
        p-3
        shadow-md
        bg-gray-100 rounded-md
      ">
        <div className="flex">
          <div className="w-2/3">
            <div className="
              text-l font-medium
            ">
              Marching Snare Lessons
            </div>
            <div className="flex">
              <div className="w-1/2 list-disc">
                <li className="font-medium">30 minutes</li>
                <li className="font-medium">$30/lesson</li>
              </div>
              <div className="w-1/2">
                Learn about marching snare technique!
              </div>
            </div>
          </div>
          <div className="
            w-1/3">
            <img src="../../../../ref/marchingsnare.jpg" alt="marching snaredrum" />
          </div>
        </div>
      </div>

      <div className="
        p-3
        shadow-md
        bg-gray-100 rounded-md
      ">
        <div className="flex">
          <div className="w-2/3">
            <div className="
              text-l font-medium
            ">
              Drum Kit Lessons
            </div>
            <div className="flex">
              <div className="w-1/2 list-disc">
                <li className="font-medium">45 minutes</li>
                <li className="font-medium">$35/lesson</li>
              </div>
              <div className="w-1/2">
                Learn to Play Rock Drumming on a DW Design Mini Pro 4-Piece Kit!
              </div>
            </div>
          </div>
          <div className="
            w-1/3">
            <img src="../../../../ref/kit.webp" alt="drumkit" />
          </div>
        </div>
      </div>

    </div>
  );
}