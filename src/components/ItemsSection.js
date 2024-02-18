import React from 'react';

const ItemsSection = () => {
    const items = [
        { id: 1, text: 'Innovative Solutions', gradient: 'bg-gradient-to-r from-green-600 to-british' },
        { id: 2, text: 'Design', gradient: 'bg-gradient-to-r from-british to-green-600' },
        { id: 3, text: 'Marketing', gradient: 'bg-gradient-to-r from-green-800 to-british' },
        { id: 4, text: 'Programming and Web Development', gradient: 'bg-gradient-to-r from-green-400 to-green-600' },
        { id: 5, text: 'Film Production', gradient: 'bg-gradient-to-r from-green-500 to-green-600' },
        { id: 6, text: 'Branding', gradient: 'bg-gradient-to-r from-green-400 to-green-500' },
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
                widthClass = 'w-full lg:w-[48.85%] xl:w-[49.75%]';
                heightClass = 'h-[100vh]';
                break;
            case 2: // Every third item in the pattern
                widthClass = 'w-full lg:w-[48.85%] xl:w-[49.75%]]';
                heightClass = 'h-[100vh]';
                break;
            default:
                return null; // This case should not be reached
        }

        // Combine width and height classes
        return `${widthClass} ${heightClass}`;
    };

    return (
        <section className="flex justify-center items-center w-full py-12 bg-gray-50">
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


