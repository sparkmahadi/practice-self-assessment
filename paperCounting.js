/* আরেকটা ফাংশন লিখবে যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। 
প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও।
সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। 
আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। 
আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
 */



function paperRequirements(book1Q, book2Q, book3Q){
    const perBook1 = 100;
    const perBook2 = 200;
    const perBook3 = 300;

    const book1PageReq = perBook1*book1Q;
    const book2PageReq = perBook2*book2Q;
    const book3PageReq = perBook3*book3Q;

    totalPageReq = book1PageReq + book2PageReq + book3PageReq;
    return totalPageReq;
}

const book1PieceReq = 2;
const book2PieceReq = 5;
const book3PieceReq = 15;

const paperRequired = paperRequirements(book1PieceReq, book2PieceReq, book3PieceReq);
console.log(paperRequired);
