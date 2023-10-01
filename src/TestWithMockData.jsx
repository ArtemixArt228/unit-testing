import React from 'react'

export const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
    }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
    },
]

const TestWithMockData = () => {
    return (
        <div>
            <ul>
                {mockData.map(item => (
                    <li key={item.id}>
                        {item.id}
                        {item.first_name},
                        {item.last_name},
                        {item.email}

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestWithMockData
