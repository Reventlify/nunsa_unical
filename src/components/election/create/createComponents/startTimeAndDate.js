import moment from "moment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";

const StartTimeAndDate = ({ startDateHandler, startTimeHandler, verified }) => {
  return (
    <>
      {verified ? (
        <div className="mb-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <MobileDatePicker
                // className='mt-3'
                label="Start Date"
                // value={startD}
                onChange={(newValue) => {
                  if (newValue !== null) {
                    startDateHandler(
                      newValue.toISOString()
                    //   moment(newValue.toISOString()).format("MM/DD/YYYY")
                    );
                  }
                }}
              />
            </DemoItem>
            <DemoItem>
              <MobileTimePicker
                className="mt-3"
                label="Start Time"
                // value={startT}
                onChange={(newValue) => {
                  if (newValue !== null) {
                    startTimeHandler(
                      moment(newValue.toISOString()).format("HH:mm:ss")
                    );
                  }
                }}
              />
            </DemoItem>
          </LocalizationProvider>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StartTimeAndDate;
