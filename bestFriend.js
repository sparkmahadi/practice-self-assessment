/* একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */

function bestFriend(friends){
    
    let standardStringLength = friends[0].length;
    let longestName = friends[0];
    for(let i=1; i < friends.length; i++){
        let index = i;
        let nameCharacters = friends[index].length;

        if(nameCharacters> standardStringLength){
            longestName = friends[index];
            standardStringLength = nameCharacters;
        }
    }
    return longestName;
}

const friends = ['sajid','mamun','kamal', 'jubayer bin rased', 'chinku'];
const longestNameFinder = bestFriend(friends);
console.log('The longest name is:', longestNameFinder);