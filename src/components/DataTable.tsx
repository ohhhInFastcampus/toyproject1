import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cva } from "class-variance-authority";
import { cn } from "@/utils";

interface HeaderData {
  headers: string[];
}

const textAlign = {
  variants: {
    align: {
      left: "ntext-left",
      center: "ntext-center",
    },
    bold: {
      default: "nfont-medium",
      bold: "nfont-semibold",
    },
  },
};

const TableHeadVariants = cva(
  "nborder-solid nborder-b nborder-slate-300 nfont-extrabold npb-4",
  textAlign
);

const TableHeaderData = ({ headers }: HeaderData) => {
  return (
    <TableHeader className="nfont-bold ndivide-y">
      <TableRow className="nborder-b-4">
        {headers.map((header, index) => {
          const alignVarian = index === 0 ? "center" : "left";
          return (
            <TableHead
              className={cn(TableHeadVariants({ align: alignVarian }))}
              key={index}>
              {header}
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

interface TableData {
  data: { [key: string]: string[] };
}

const TableBodyDataVariants = cva("", textAlign);

const TableBodyData = ({ data }: TableData) => {
  return (
    <TableBody className="ndivide-y nborder-b-8">
      {Object.keys(data).map((key) => {
        return (
          <TableRow
            className="ndivide-y nborder-solid nborder-slate-300 "
            key={key}>
            {data[key].map((cellData, cellIndex) => {
              const alignVarian = cellIndex === 0 ? "center" : "left";
              const boldVarian = cellIndex === 0 ? "bold" : "default";
              return (
                <TableCell
                  className={cn(
                    TableBodyDataVariants({
                      align: alignVarian,
                      bold: boldVarian,
                    })
                  )}
                  key={cellIndex}>
                  {cellData}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

/**
 *
 * @param {string[]} headers -헤더로 사용될 문자열 배열입니다. 각 문자열은 테이블의 열 제목을 나타냅니다.
 * @param {{ [key: string]: string[] }} data - 테이블의 본문 데이터로, 키-값 쌍의 객체입니다.
 *
 * 사용 예:
 * ```
 * const headers = ["ID", "Name", "Age"];
 * const data = {
 *   1: ["1", "John Doe", "30"],
 *   2: ["2", "Jane Doe", "25"]
 * };
 *
 * <TableContent headers={headers} data={data} />
 * ```
 */
export default function TableContent({
  headers,
  data,
}: {
  headers: string[];
  data: { [key: string]: string[] };
}) {
  return (
    <>
      <Table>
        <TableHeaderData headers={headers} />
        <TableBodyData data={data} />
      </Table>
    </>
  );
}
