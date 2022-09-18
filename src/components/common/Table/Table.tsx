import React, { ReactNode } from 'react';

export const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {headers.map((header, headerIndex) => (
            <th
              key={headerIndex}
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        {rows.map((row, rowIndex) => {
          return (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {row.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {column}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
