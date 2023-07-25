import * as React from 'react';
import { Button, Stack, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Checkboxs from '../../../Molecules/Courses/CoursesList/Checkboxs';
import ApplyFilterButton from '../../../Molecules/Courses/CoursesList/ApplyFilterButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  bordercolor: 'blue'
};


export default function CustomModal({ data, modalChecked, existedchecks }) {
  // console.log('modal', data);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleApply = () => {
    setOpen(false);
  }

  return (
    <div >
      <Button onClick={handleOpen} sx={{ color: '#28a19c', fontSize: '.8rem', fontWeight: 600 }}
      >Show All</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack sx={{ alignItems: 'end' }}>
            <Button onClick={handleClose} sx={{ color: '#28a19c' }} ><CloseIcon /></Button>
          </Stack>
          <Stack >
            {data.map((item, i) => (<>
              <Checkboxs item={item} modalChecked={modalChecked} existedchecks={existedchecks} />
            </>)
            )}
          </Stack>
          <Stack sx={{ alignItems: 'end' }}>
            <ApplyFilterButton setOpen={setOpen} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}