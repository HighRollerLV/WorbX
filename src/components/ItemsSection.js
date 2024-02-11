import React from 'react';

const ItemsSection = () => {
    const items = [
        { id: 1, text: 'Innovative Solutions', gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
        { id: 2, text: 'Global Network', gradient: 'bg-gradient-to-r from-teal-400 to-green-500' },
        { id: 3, text: 'Secure Transactions', gradient: 'bg-gradient-to-r from-orange-500 to-red-500' },
        { id: 4, text: 'Real-time Analytics', gradient: 'bg-gradient-to-r from-purple-400 to-pink-500' },
        { id: 5, text: 'User-friendly Platforms', gradient: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
        { id: 6, text: 'Scalable Infrastructure', gradient: 'bg-gradient-to-r from-green-500 to-teal-500' },
    ];

    // Function to determine the TailwindCSS width and height class based on the item's index
    const getClass = (index) => {
        let widthClass;
        let heightClass;

        switch (index % 3) {
            case 0: // Every first item in the pattern
                widthClass = 'w-full';
                heightClass = 'h-[50vh]'; // Added height class for case 0
                break;
            case 1: // Every second item in the pattern
                widthClass = 'w-[38.61%]';
                heightClass = 'h-[100vh]'; // Added height class for cases 1 and 2
                break;
            case 2: // Every third item in the pattern
                widthClass = 'w-3/5';
                heightClass = 'h-[100vh]'; // Added height class for cases 1 and 2
                break;
            default:
                return null; // This case should not be reached
        }

        // Combine width and height classes
        return `${widthClass} ${heightClass}`;
    };

    return (
        <section className="flex justify-center items-center w-full py-12 bg-gray-100">
            <div className="w-3/4 mx-auto">
                <div className="flex flex-wrap -mx-2 gap-5">
                    {items.map((item, index) => (
                        <div key={item.id} className={`px-4 ${getClass(index)} ${item.gradient} rounded-2xl items-center justify-center`}>
                            <div className={`p-4 rounded-lg flex items-center justify-center text-white h-full w-full`}>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ItemsSection;


