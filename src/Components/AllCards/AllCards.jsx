import React, { use } from 'react';


const AllCards = ({ fetchPromise }) => {

    const cardsData = use(fetchPromise);
    console.log(cardsData);
    return (
        <div className="max-w-300 mx-auto flex flex-col sm:flex-row justify-between">
            <div className='border-right'>
                <h2 className="text-2xl">Customer Ticktes</h2>

                <div className='sm:grid-cols-2 grid grid-cols-1 gap-6 my-5'>
                    {
                        cardsData.map(card => <div className="card w-96 bg-base-100 card-xs shadow-sm">
                            <div className="card-body ">
                                <div className='flex justify-between gap-10 object-fill'>
                                    <h2 className="card-title font-bold text-2xl">{card.title}</h2>
                                    <button className="btn btn-success rounded-3xl">{card.status}</button>
                                </div>
                                <p className='text-[#627382]'>{card.description}</p>
                                <div className="">
                                    <div className='flex float-start gap-2'>
                                        <p className='text-[#627382] text-xl'>#{card.id}</p>
                                        <span className='text-[15px]'>{card.priority} Priority</span>
                                    </div>
                                    <div className='flex float-end gap-2'>
                                        <h6 className='text-[#627382] text-[15px]'>{card.customer}</h6>
                                        <span className='text-[#627382] text-[15px]'>{card.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* Task Section */}
            <div>
                <div className='mb-5'>
                    <h2 className='text-xl font-bold'>Task Status</h2>
                    <p>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold'>Resolved Task</h2>
                    <p>No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default AllCards;