import { useState } from "react";
import { useEffect } from "react";

import { useQuery } from "react-query";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const getData = (url) => {
  return fetch(url).then((r) => r.json());
};

export default function App() {
  const [start, setStart] = useState(0);
  // const [virtualLoading, setVirtualLoading] = useState(true);
  const total = 200; // known
  const { data } = useQuery(
    [start],
    () => getData("https://jsonplaceholder.typicode.com/todos"),
    {
      refetchOnWindowFocus: false
    }
  );

  // useEffect(() => {
  //   setVirtualLoading(false);
  // }, [data]);

  if (!data) {
    return <div></div>;
  }

  const loadingText = () => {
    return <span className="loading-text"></span>;
  };

  const onVirtualScroll = (evt) => {
    setStart(evt.first);
  };

  console.log(start, total, data);

  return (
    <div className="App">
      <DataTable
        value={data}
        scrollable
        scrollHeight="600px"
        lazy
        start={start}
        rows={20}
        // loading={virtualLoading}
        virtualScroll
        virtualRowHeight={28}
        onVirtualScroll={onVirtualScroll}
        totalRecords={total}
      >
        <Column loadingBody={loadingText} field="id" header="id" />
        <Column loadingBody={loadingText} field="title" header="title" />
      </DataTable>
    </div>
  );
}
