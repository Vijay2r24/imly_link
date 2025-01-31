// import React, { useState,useEffect} from 'react';

// const TaskGrid = () => {
//     // Example task data
//     const [tasks] = useState([
//         { id: 1, title: 'Order 1', startDate: '01/01/2024', endDate: '01/15/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 2, title: 'Order 2', startDate: '01/02/2024', endDate: '01/16/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 3, title: 'Order 3', startDate: '01/03/2024', endDate: '01/17/2024', status: 'Canceled', comments: 'Cancelled by user' },
//         { id: 4, title: 'Order 4', startDate: '01/04/2024', endDate: '01/18/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 5, title: 'Order 5', startDate: '01/05/2024', endDate: '01/19/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 6, title: 'Order 6', startDate: '01/06/2024', endDate: '01/20/2024', status: 'In Review', comments: 'Pending review' },
//         { id: 7, title: 'Order 7', startDate: '01/07/2024', endDate: '01/21/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 8, title: 'Order 8', startDate: '01/08/2024', endDate: '01/22/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 9, title: 'Order 9', startDate: '01/09/2024', endDate: '01/23/2024', status: 'Canceled', comments: 'Cancelled by user' },
//         { id: 10, title: 'Order 10', startDate: '01/10/2024', endDate: '01/24/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 11, title: 'Order 11', startDate: '01/11/2024', endDate: '01/25/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 12, title: 'Order 12', startDate: '01/12/2024', endDate: '01/26/2024', status: 'In Review', comments: 'Pending review' },
//         { id: 13, title: 'Order 13', startDate: '01/13/2024', endDate: '01/27/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 14, title: 'Order 14', startDate: '01/14/2024', endDate: '01/28/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 15, title: 'Order 15', startDate: '01/15/2024', endDate: '01/29/2024', status: 'Canceled', comments: 'Cancelled by user' },
//         { id: 16, title: 'Order 16', startDate: '01/16/2024', endDate: '01/30/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 17, title: 'Order 17', startDate: '01/17/2024', endDate: '01/31/2024', status: 'In Progress', comments: 'Work in progress' },
//         { id: 18, title: 'Order 18', startDate: '01/18/2024', endDate: '02/01/2024', status: 'Canceled', comments: 'Cancelled by user' },
//         { id: 19, title: 'Order 19', startDate: '01/19/2024', endDate: '02/02/2024', status: 'To Do', comments: 'Initial task' },
//         { id: 20, title: 'Order 20', startDate: '01/20/2024', endDate: '02/03/2024', status: 'In Progress', comments: 'Work in progress' },
//     ]);
//     const [isChecked, setIsChecked] = useState(false);
//     const [feedbacks, setFeedbacks] = useState([]);

//     const handleCheckboxChange = () => {
//         setIsChecked(!isChecked); // Toggle the checkbox state
//     };
//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 15; // Change this value for different number of items per page

//     // Calculate the index of the first and last item on the current page
//     const firstIndex = currentPage * itemsPerPage;
//     const lastIndex = firstIndex + itemsPerPage;

//     // Slice the tasks array to get the tasks for the current page
//     const currentTasks = tasks.slice(firstIndex, lastIndex);

//     // Calculate total pages
//     const totalPages = Math.ceil(tasks.length / itemsPerPage);
//     const [rating, setRating] = useState(0); // Initial rating state

//     const handleRating = (value) => {
//         setRating(value); // Update rating state based on the clicked star
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages - 1) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 0) {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//     useEffect(() => {
//         const fetchFeedbacks = async () => {
//             try {
//                 const response = await fetch('https://imly-b2y.onrender.com/api/Feedback/GetAllFeedBacks?StartDate=2024-10-09&EndDate=2024-10-11&StoreID=11&pageNumber=1&pageSize=10');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 console.log(data); // Log the response data
//                 setFeedbacks(data.Feedbacks); // Set the feedbacks state
//             } catch (error) {
//                 console.error('Error fetching feedbacks:', error); // Log any error
//             }
//         };

//         fetchFeedbacks();
//     }, []); // Empty dependency array means this runs once after the first render

//     // If you need to access feedbacks.CustomerName, do it here or in another useEffect
//     useEffect(() => {
//         if (feedbacks.length > 0) {
//             console.log("Customer Name:", feedbacks[0].CustomerName); // Access CustomerName of the first feedback
//         }
//     }, [feedbacks]); 

//     return (
//         <div className="main-container">
//             <h2 className="text-xl font-medium mb-4">Feeback</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {currentTasks.map(task => (
//                     <div key={task.id} className="bg-white p-4 rounded-lg shadow mb-4">
//                         <h3 className="text-lg font-semibold">{task.title}</h3>
//                         <div className="flex mb-2">
//                             <span className="text-gray-500 w-1/3">FeedbackDate</span>
//                             <span className="text-gray-900 w-2/3">
//                                 <span className='pr-8'>:</span>{task.startDate}
//                             </span>
//                         </div>
//                         <div className="flex mb-2">
//                             <span className="text-gray-500 w-1/3">CustomerName</span>
//                             <span className="text-gray-900 w-2/3">
//                                 <span className='pr-8'>:</span>{feedbacks[0].CustomerName}
//                             </span>
//                         </div>
//                         <div className="flex mb-2 items-center"> {/* Align items in the center */}
//                             <span className="text-gray-500 w-1/3">Checkboxes</span>
//                             <span className="text-gray-900 w-2/3 flex items-center"> {/* Flex for proper alignment */}
//                                 <span className="pr-8">:</span>
//                                 <label className="flex items-center cursor-pointer">
//                                     <input
//                                         type="checkbox"
//                                         className="hidden" // Hide the default checkbox
//                                         onChange={handleCheckboxChange}
//                                         checked={isChecked}
//                                     />
//                                     <span
//                                         className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
//               ${isChecked ? 'bg-green-500' : 'bg-white'} transition-colors duration-200`}
//                                     >
//                                         {isChecked && <span className="text-white">✓</span>} {/* Checkmark */}
//                                     </span>
//                                 </label>
//                             </span>
//                         </div>

//                         <div className="flex mb-2">
//                             <span className="text-gray-500 w-1/3">comments</span>
//                             <span className="text-gray-900 w-2/3">
//                                 <span className='pr-8'>:</span>{task.startDate}
//                             </span>
//                         </div>
//                         <div className="flex mb-2 items-center">
//                             <span className="text-gray-500 w-1/3">Rating</span>
//                             <span className="text-gray-900 w-2/3 flex items-center">
//                                 <span className="pr-8">:</span>
//                                 {[1, 2, 3, 4, 5].map((star) => (
//                                     <span
//                                         key={star}
//                                         className={`cursor-pointer text-2xl transition-colors duration-200 ${star <= rating ? 'text-yellow-500' : 'text-gray-400'
//                                             }`} // Use 'text-yellow-500' for gold color
//                                         onClick={() => handleRating(star)} // Set rating on click
//                                     >
//                                         ★
//                                     </span>
//                                 ))}
//                             </span>
//                         </div>
//                     </div>

//                 ))}
//             </div>

//             <div className="flex justify-between mt-4">
//                 <button
//                     onClick={handlePrevPage}
//                     disabled={currentPage === 0}
//                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
//                 >
//                     Previous
//                 </button>
//                 <span className="self-center">
//                     Page {currentPage + 1} of {totalPages}
//                 </span>
//                 <button
//                     onClick={handleNextPage}
//                     disabled={currentPage === totalPages - 1}
//                     className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TaskGrid;
import React, { useEffect, useState, useContext } from 'react';
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { DataContext } from "../../Context/DataContext";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";

const FeedbackComponent = () => {
    const [feedbacks, setFeedbacks] = useState([]); // Feedback data
    const [rating, setRating] = useState(0); // Rating state
    const [isChecked, setIsChecked] = useState(false); // Checkbox state
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages
    const [totalItems, setTotalItems] = useState(0);
    const pageSize = 9; // Number of feedbacks per page

    const { storesData } = useContext(DataContext);
    const [stores, setStores] = useState([]);
    const [selectedStore, setSelectedStore] = useState("");
    const [value, setValue] = useState({
        startDate: "",
        endDate: "",
    });
    useEffect(() => {
        if (storesData) {
            setStores(storesData || []);
        }
    }, [storesData]);


    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const startDate = value.startDate || "2024-9-09"; // Fallback start date
                const endDate = value.endDate || "2024-10-11";    // Fallback end date
                const StoreID = selectedStore.StoreID;            // Use dynamic store ID

                // Perform API call using axios
                const response = await axios.get(`https://imly-b2y.onrender.com/api/Feedback/GetAllFeedBacks`, {
                    params: {
                        StartDate: startDate,
                        EndDate: endDate,
                        StoreID: StoreID,
                        pageNumber: currentPage,
                        pageSize: pageSize,
                    }
                });

                if (response.status === 200 && response.data.StatusCode === "SUCCESS") {
                    setFeedbacks(response.data.Feedbacks);  // Set feedback data
                    setTotalPages(response.data.totalPages);  // Set total pages
                    setTotalItems(response.data.totalItems);  // Set total items count
                } else {
                    throw new Error(`Failed to fetch feedbacks. Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching feedbacks:', error);
            }
        };

        fetchFeedbacks();
    }, [selectedStore, value.startDate, value.endDate, currentPage, pageSize]);
    // Ensure useEffect is triggered when currentPage or pageSize changes
    // Fetch feedbacks when currentPage changes

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleRating = (star) => {
        setRating(star);
    };

    // Handle pagination
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='main-container'>

            <div className="body-container">
                <h2 className="heading">FeedBacks</h2>
            </div>
            <hr className="border-t border-gray-300 mt-4 mb-6" />
            <div className="flex flex-wrap justify-end gap-2 mt-2">
                {/* Container for Combo box */}
                <div className="combobox-container flex items-center">
                    <Combobox value={selectedStore} onChange={setSelectedStore}>
                        <div className="combobox-wrapper h-[40px]">
                            <Combobox.Input
                                className="combobox-input w-full h-full"
                                displayValue={(store) => store?.StoreName || "Select Store ID"}
                                placeholder="Select Store Name"
                            />
                            <Combobox.Button className="combobox-button">
                                <ChevronUpDownIcon className="combobox-icon" aria-hidden="true" />
                            </Combobox.Button>
                            <Combobox.Options className="combobox-options">
                                {/* Add "Select Store ID" option */}
                                <Combobox.Option
                                    key="select-store-id"
                                    className={({ active }) =>
                                        active ? "combobox-option-active" : "combobox-option"
                                    }
                                    value={{ StoreID: null, StoreName: "Select Store ID" }}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={
                                                    selected
                                                        ? "combobox-option-text font-semibold"
                                                        : "combobox-option-text font-normal"
                                                }
                                            >
                                                Select Store ID
                                            </span>
                                            {selected && (
                                                <span
                                                    className={
                                                        active
                                                            ? "combobox-option-selected-icon active-selected-icon"
                                                            : "combobox-option-selected-icon"
                                                    }
                                                >
                                                    <CheckIcon
                                                        className="combobox-check-icon"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>

                                {/* Render all store options */}
                                {stores.map((store) => (
                                    <Combobox.Option
                                        key={store.StoreID}
                                        className={({ active }) =>
                                            active ? "combobox-option-active" : "combobox-option"
                                        }
                                        value={store}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={
                                                        selected
                                                            ? "combobox-option-text font-semibold"
                                                            : "combobox-option-text font-normal"
                                                    }
                                                >
                                                    {store.StoreName}
                                                </span>
                                                {selected && (
                                                    <span
                                                        className={
                                                            active
                                                                ? "combobox-option-selected-icon active-selected-icon"
                                                                : "combobox-option-selected-icon"
                                                        }
                                                    >
                                                        <CheckIcon
                                                            className="combobox-check-icon"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </div>
                    </Combobox>
                </div>

                {/* Container for Date Pickers */}
                <div className="flex justify-center items-center gap-4 w-full p-2 sm:w-auto md:w-80 text-sm leading-6">
                    <div className="border-solid border-gray-400 w-full border-[1px] rounded-lg">
                        <Datepicker
                            popoverDirection="down"
                            showShortcuts={true}
                            showFooter={true}
                            placeholder="Start Date and End Date"
                            primaryColor={"purple"}
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {feedbacks.map(feedback => (
                    <div key={feedback.FeedBackID} className="bg-white p-4 rounded-lg shadow mb-4">
                        <div className="flex mb-2">
                            <h3 className="text-lg sm:text-base md:text-sm font-semibold">
                                Order{feedback.OrderNumber}
                            </h3>
                        </div>
                        <div className="flex mb-2">
                            <span className="text-gray-500 w-1/2 whitespace-normal text-base sm:text-sm md:text-xs">
                                Customer Name
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center whitespace-normal text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                <span>{feedback.CustomerName}</span>
                            </span>
                        </div>

                        <div className="flex mb-2">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Project Type
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                <span>{feedback.ItemName}</span>
                            </span>
                        </div>

                        <div className="flex mb-2">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Feedback Date
                            </span>
                            <span className="text-gray-900 w-1/2 text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>{new Date(feedback.CreatedAt).toLocaleDateString()}
                            </span>
                        </div>

                        <div className="flex mb-2 items-center">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Received Documents
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        onChange={handleCheckboxChange}
                                        checked={feedback.ReceivedDocuments}
                                    />
                                    <span
                                        className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${feedback.ReceivedDocuments ? 'bg-green-500' : 'bg-white'} transition-colors duration-200`}
                                    >
                                        {feedback.ReceivedDocuments && <span className="text-white">✓</span>}
                                    </span>
                                </label>
                            </span>
                        </div>

                        <div className="flex mb-2 items-center">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Warranty Card
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        onChange={handleCheckboxChange}
                                        checked={feedback.ReceivedWarrantyCard}
                                    />
                                    <span
                                        className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${feedback.ReceivedWarrantyCard ? 'bg-green-500' : 'bg-white'} transition-colors duration-200`}
                                    >
                                        {feedback.ReceivedWarrantyCard && <span className="text-white">✓</span>}
                                    </span>
                                </label>
                            </span>
                        </div>

                        <div className="flex mb-2 items-center">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Installation Successful
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        onChange={handleCheckboxChange}
                                        checked={feedback.InstallationSuccessful}
                                    />
                                    <span
                                        className={`w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center
                                ${feedback.InstallationSuccessful ? 'bg-green-500' : 'bg-white'} transition-colors duration-200`}
                                    >
                                        {feedback.InstallationSuccessful && <span className="text-white">✓</span>}
                                    </span>
                                </label>
                            </span>
                        </div>

                        <div className="flex mb-2">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Comments
                            </span>
                            <span className="text-gray-900 w-1/2 text-base sm:text-sm md:text-xs">
                                <span className='pr-8'>:</span>{feedback.Remarks}
                            </span>
                        </div>

                        <div className="flex mb-2 items-center">
                            <span className="text-gray-500 w-1/2 text-base sm:text-sm md:text-xs">
                                Rating
                            </span>
                            <span className="text-gray-900 w-1/2 flex items-center text-base sm:text-sm md:text-xs">
                                <span className="pr-8">:</span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        className={`cursor-pointer text-2xl transition-colors duration-200 ${star <= feedback.OverallRating ? 'text-yellow-500' : 'text-gray-400'}`}
                                        onClick={() => handleRating(star)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                ))}
            </div>


            {/* Pagination controls */}
            <div className="flex justify-center mt-4 items-center">
    <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-200' : 'inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200'} transition-colors`}
    >
        Previous
    </button>

    {/* Displaying current page and total pages */}
    <span className="text-gray-500 mx-2">
        {`Page ${currentPage} of ${totalPages}`}
    </span>

    {/* Displaying total feedbacks count */}
    <span className="text-gray-500 mx-2">
        {`Total Feedbacks: ${totalItems}`}
    </span>

    {/* Displaying per page count */}
    <span className="text-gray-500 mx-2">
        {`Showing ${feedbacks.length} per page`}  {/* Length of feedbacks array to show per page count */}
    </span>

    <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-2 rounded ${currentPage === totalPages ? 'bg-gray-200' : 'inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'} transition-colors`}
    >
        Next
    </button>
</div>

        </div>
    );
};

export default FeedbackComponent;
