import useAxiosLoader, {
  axiosInstanceWithCredential,
  axiosInstanceWithMultipartFormData,
  axiosInstanceWithOutCredential,
} from "../../services/http";
import { Box } from "@mui/material";

const Spinner = () => <div className="spinner"></div>;

function Loader() {
  const [axiosWithCredentialLoading] = useAxiosLoader(
    axiosInstanceWithCredential
  );
  const [axiosWithOutCredentialLoading] = useAxiosLoader(
    axiosInstanceWithOutCredential
  );
  const [axiosWithMultiPartheaderLoading] = useAxiosLoader(
    axiosInstanceWithMultipartFormData
  );

  return (
    <>
      {(axiosWithCredentialLoading ||
        axiosWithOutCredentialLoading ||
        axiosWithMultiPartheaderLoading) && (
        <Box className="overlay">
          <Spinner />
          {/* <img
            style={{
              borderRadius: "50%",
            }}
            className="spinner-image"
            src="assets\images\Logo.jpeg"
            alt=""
          /> */}
        </Box>
      )}
    </>
  );
}

export default Loader;
