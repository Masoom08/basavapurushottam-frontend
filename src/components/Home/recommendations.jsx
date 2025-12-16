export default function Recommendations() {
  const data = [
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T1.jpg",
      text: "Purushottam Basava is an upright career IAS officer, hard working, honest, follows the process with absolute due diligence, at the same time kind and helpful and humane in approach. He draws his strength from his deep rooted spiritual moorings.",
      name: "Shri Anil Sahasrabudhe",
      role: "Chairperson, All India Council for Technical Education,",
      org: "AICTE",
    },
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T2-1.jpg",
      text: "Purushottam is an Indian Administrative Services officer of exceptional conduct and integrity with a strong track record in designing and implementing innovative public policy programs. No doubt, he is widely known as 'Pro-people' across administrative circles.",
      name: "Dr Manish Ranjan, IAS",
      role: "Secretary, Rural Department",
      org: "Government of Jharkhand",
    },
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T3.jpg",
      text: "Purushottam has deep understanding of policy making and policy issues. He has excellent coordination and administrative abilities. He gave excellent inputs for finalization of the National Education Policy 2020 and its implementation plan SERB/EDU.",
      name: "Shri Maneesh Garg, IAS",
      role: "Joint Secretary, Ministry of Education",
      org: "Government of India",
    },
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T5.jpg",
      text: "It is rare to meet a person who is not only dynamic, forward thinking and passionate but has an eye for detail and is a perfectionist. I am truly blessed to meet a person like him.",
      name: "Shri Dhruv Galgotia",
      role: "CEO",
      org: " Galgotias Education Group",
    },
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T4.jpg",
      text: "I found him a very conscientious & committed professional. He is very supportive and pleasant. His engagement skills with various stakeholders of the ministry have been outstanding. His role in making and implementing the National Education Policy 2020 is remarkable.",
      name: "Dr Mamidala Jagadesh Kumar",
      role: "Chairman",
      org: " University Grants Commission",
    },
    {
      img: "https://basavapurushottam.com/wp-content/uploads/2024/07/T6.jpg",
      text: "I know him when we were trying to revive SpiceJet in 2015. He was very helpful to us. Purushottam is an honest and upright officer and we need more officers like him in public life.",
      name: "Shri Ajay Singh",
      role: "Chairman & Managing Director",
      org: "SpiceJet Ltd",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-20 font-[Times_New_Roman] text-gray-800">

      {/* SECTION HEADER */}
      <div className="text-center mb-12">
        <div className="w-full flex justify-center">
          <div className="h-[5px] w-[60%] bg-[#efb09d] mb-6"></div>
        </div>

        <h2 className="text-4xl font-bold tracking-wide">Recommendations</h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-16">

        {data.map((item, index) => (
          <div className="flex flex-col items-center text-center" key={index}>

            

            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-[#efb09d] mb-4 shadow-md"
            />

            {/* Quote */}
            <p className="italic text-[17px] leading-relaxed mb-4">
              {item.text}
            </p>

            {/* Name */}
            <p className="font-bold uppercase tracking-wide text-[16px]">
              {item.name}
            </p>

            {/* Designation */}
            <p className="text-[15px]">{item.role}</p>

            {/* Org */}
            <p className="font-semibold text-[15px]">{item.org}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
