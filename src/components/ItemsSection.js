import React from 'react';

const ItemsSection = () => {
    const items = [
        { id: 1, text: 'Innovative Solutions', gradient: 'bg-gradient-to-r from-gray-700 to-gray-900' },
        { id: 2, text: 'Global Network', gradient: 'bg-gradient-to-r from-gray-600 to-gray-400' },
        { id: 3, text: 'Secure Transactions', gradient: 'bg-gradient-to-r from-zinc-500 to-gray-800' },
        { id: 4, text: 'Real-time Analytics', gradient: 'bg-gradient-to-r from-neutral-400 to-gray-900' },
        { id: 5, text: 'User-friendly Platforms', gradient: 'bg-gradient-to-r from-gray-800 to-gray-900' },
        { id: 6, text: 'Scalable Infrastructure', gradient: 'bg-gradient-to-r from-gray-600 to-gray-800' },
    ];

    // Function to determine the TailwindCSS width and height class based on the item's index
    const getClass = (index) => {
        let widthClass;
        let heightClass;

        switch (index % 3) {
            case 0: // Every first item in the pattern
                widthClass = 'w-full';
                heightClass = 'h-[50vh]';
                break;
            case 1: // Every second item in the pattern
                widthClass = 'w-[38.61%]';
                heightClass = 'h-[100vh]';
                break;
            case 2: // Every third item in the pattern
                widthClass = 'w-3/5';
                heightClass = 'h-[100vh]';
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


