import React, { useState } from 'react';

const TopicSection = ({ day, topics, setTopics }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTopic = () => {
        if (inputValue.trim()) {
            setTopics(prevTopics => ({
                ...prevTopics,
                [day]: [...(prevTopics[day] || []), inputValue.trim()]
            }));
            setInputValue('');
        }
    };

    const handleShowTopics = () => {
        alert(`Topics for Day ${day}: ${topics[day]?.join(', ') || 'No topics added'}`);
    };

    return (
        <div className="topic-container">
            <label htmlFor={`day${day}-input`}>Enter topic for Day {day}:</label>
            <input
                type="text"
                id={`day${day}-input`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
            />
            <button onClick={handleAddTopic}>Add Topic</button>
            <button onClick={handleShowTopics}>Show Topics</button>
        </div>
    );
};

export default TopicSection;