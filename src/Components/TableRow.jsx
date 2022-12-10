import React from 'react';

const TableRow = ({ info }) => {
    const { area, email, first_name, gender, id, ip_address, last_name, mobile, status, time } = info;
    return (
        <tr>
            <th class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{id}</th>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{first_name + ' ' + last_name}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{email}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{gender}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{ip_address}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{time}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{area}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{mobile}</td>
            <td class={`${status === 'true' ? 'bg-green-600 ' : 'bg-red-600'} text-white`}>{status}</td>
        </tr>
    );
};

export default TableRow;