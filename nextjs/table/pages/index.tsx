import {useCallback, Key} from 'react';
import Head from 'next/head';
import {
  ChipProps,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  User,
} from '@nextui-org/react';
import {Chip} from "@nextui-org/chip";

import {columns, characters} from './data';
import DeleteIcon from '@/components/delete-icon';
import EditIcon from '@/components/edit-icon';
import ViewIcon from "@/components/view-icon";

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  dazed: 'warning',
  stunned: 'warning',
  dead: 'danger',
}

type Character = {
  name: string;
  race: string;
  class: string;
  level: number;
  status: string;
  avatarUrl: string;
}

export default function Home() {
  const renderCell = useCallback((char: Character, key: Key) => {
    const cellValue = char[key as keyof Character];

    switch (key) {
      case 'name':
        return (
          <User
            avatarProps={{src: char.avatarUrl, radius: 'lg'}} // Avatar photo
            name={cellValue}  // Title
            description={char.race} // Subtitle
          >
            {char.class}
          </User>
        );
      case 'class':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">Level {char.level}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[char.status]}
            size="sm"
            variant="flat"
            >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <ViewIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Table</title>
      </Head>
      <div>
        <Table aria-label="RPG table">
          <TableHeader columns={columns}>
            {
              (column) => (
                <TableColumn key={column.key}>
                  {column.label}
                </TableColumn>
              )
            }
          </TableHeader>
          <TableBody items={characters}>
            {
              (item) => (
                <TableRow key={item.key}>
                  {
                    (colKey) => (
                      <TableCell>{renderCell(item, colKey)}</TableCell>
                    )
                  }
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </div>
    </>
  );
}
