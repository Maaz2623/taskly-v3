"use client"
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TaskProps } from "@/types";
import CustomCheckbox from "./CustomCheckbox";
import Image from "next/image";
import { deleteTask } from "@/lib/actions/task.actions";

const CompletedTaskData = ({
  _id,
  title,
  description,
  priority,
  isPending,
  isCompleted,
}: TaskProps) => {
  return (
    <TableRow>
      <TableCell className="font-medium">
        <CustomCheckbox id={_id} type="completed" />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell className="">{priority}</TableCell>
      <TableCell className="">status</TableCell>
      <TableCell className="">
        <Image
          onClick={() => deleteTask(_id)}
          className="rounded-sm hover:bg-secondary p-1 hover:cursor-pointer transition-all duration-200"
          src="/assets/bin.png"
          width={30}
          height={30}
          alt="Bin"
        />
      </TableCell>
    </TableRow>
  );
};

export default CompletedTaskData;
