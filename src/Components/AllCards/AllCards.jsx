import React, { use } from 'react';

const AllCards = ({fetchPromise}) => {

    const cardsData=use(fetchPromise);
    console.log(cardsData);
    return (
        <div className="max-w-300 mx-auto flex justify-between">
            <div>
                <h2 className="text-2xl">Customer Ticktes</h2>
            </div>
            <div>
                <div>
                    <h2>Task Status</h2>
                    <p>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h2>Resolved Task</h2>
                    <p>No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default AllCards;