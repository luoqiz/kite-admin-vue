import { UserEnum } from "@/enum/userEnum";
import dayjs from "dayjs";

export function parseDate2Str(
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  format: string | undefined
) {
  format = format || "YYYY-MM-DD HH:mm:ss";
  return dayjs(date).format(format);
}

export function formatTime(row: { [x: string]: any }, column: { property: string | number }) {
  let data = row[column.property];
  return parseDate2Str(new Date(data), "YYYY-MM-DD HH:mm:ss");
}
