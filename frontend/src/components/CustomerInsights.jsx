import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ExportReports() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/sales`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch sales data");
        }
        return res.json();
      })
      .then((data) => setSales(data))
      .catch((err) => console.error("Sales data error:", err));
  }, []);

  const exportCSV = () => {
    const headers = [
      "Transaction_ID",
      "Date",
      "Product_Category",
      "Quantity",
      "Total_Amount",
    ];

    const rows = sales.map((item) => [
      item.Transaction_ID,
      item.Date,
      item.Product_Category,
      item.Quantity,
      item.Total_Amount,
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "Retail_Sales_Report.csv");
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.text("Global Retail Sales Report", 14, 15);

    autoTable(doc, {
      head: [["ID", "Date", "Category", "Qty", "Amount"]],
      body: sales.map((item) => [
        item.Transaction_ID,
        item.Date,
        item.Product_Category,
        item.Quantity,
        item.Total_Amount,
      ]),
    });

    doc.save("Retail_Sales_Report.pdf");
  };

  return (
    <div className="bg-slate-800 rounded-xl p-8 mt-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        Export Reports
      </h2>

      <div className="flex gap-6">
        <button
          onClick={exportCSV}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold"
        >
          📄 Export CSV
        </button>

        <button
          onClick={exportPDF}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold"
        >
          📕 Export PDF
        </button>
      </div>
    </div>
  );
}

export default ExportReports;