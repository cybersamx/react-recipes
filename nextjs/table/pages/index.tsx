import {MouseEvent, Key, useCallback, useState, MouseEventHandler} from 'react';
import Head from 'next/head';
import {
  Button,
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

import {Attendee, initialAttendees, columns} from './data';
import DeleteIcon from '@/components/delete-icon';
import EditIcon from '@/components/edit-icon';
import ViewIcon from '@/components/view-icon';

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  speaker: 'warning',
  volunteer: 'warning',
  unpaid: 'danger',
}

export default function Home() {
  const [attendees, setAttendees] = useState(initialAttendees);

  const renderCell = useCallback((attendee: Attendee, colKey: Key) => {
    const cellValue = attendee[colKey as keyof Attendee];

    switch (colKey) {
      case 'name':
        return (
          <User
            avatarProps={{src: attendee.avatarUrl, radius: 'lg'}} // Avatar photo
            name={cellValue}  // Attendee's name as title
            description={attendee.title} // Attendee's title as subtitle
          >
            {attendee.title}
          </User>
        );
      case 'company':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{attendee.location}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[attendee.status]}
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
                <DeleteIcon onClick={removeAttendee(attendee)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const addAttendee = (e: MouseEvent<HTMLButtonElement>) => {
    // Randomly add a new attendee by cloning an existing one, but with a different key.

    const rand = Math.round((Math.random() * 100) % (initialAttendees.length - 1));
    let newAttendee = { ...initialAttendees[rand] };

    newAttendee.key = attendees.length + 1;
    attendees.map((item: Attendee) => {
      if (item.key >= newAttendee.key) {
        newAttendee.key = item.key + 1;
      }
    });

    setAttendees((prevState: Attendee[]) => {
      return [...prevState, newAttendee];
    });
  };

  const removeAttendee = ((attendee: Attendee): MouseEventHandler<HTMLButtonElement> => {
    return (e: MouseEvent<HTMLButtonElement>) => {
      setAttendees((prevState: Attendee[]) => {
        return prevState.filter((item: Attendee) => {
          // Retain the attendee not matching the one we need to remove.
          return item.key !== attendee.key;
        });
      });
    };
  });

  return (
    <>
      <Head>
        <title>React Recipes - Next.js Table</title>
      </Head>
      <div>
        <Button className="m-3" onClick={addAttendee}>Add Attendee</Button>
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
          <TableBody items={attendees}>
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
