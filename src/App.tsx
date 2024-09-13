import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { CommandLineIcon, RectangleStackIcon, Squares2X2Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Button, Collapse, IconButton, Input, Navbar, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        placeholder={undefined}
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  const handleOnLoginClick = () => {
    navigate("login");
  };

  const handleOnRegisterClick = () => {
    navigate("register");
  };

  return (
    <>
      <Navbar placeholder={undefined} shadow={false} fullWidth className="border-0">
        <div className="container mx-auto flex items-center justify-between">
          <Typography placeholder={undefined} color="blue-gray" className="text-lg font-bold">
            Material Tailwind
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>
              <RectangleStackIcon className="h-5 w-5" />
              Pages
            </NavItem>
            <NavItem>
              <UserCircleIcon className="h-5 w-5" />
              Account
            </NavItem>
            <NavItem>
              <Squares2X2Icon className="h-5 w-5" />
              Blocks
            </NavItem>
            <NavItem>
              <CommandLineIcon className="h-5 w-5" />
              Docs
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button placeholder={undefined} variant="text" onClick={handleOnLoginClick}>
              Log in
            </Button>
            <Button placeholder={undefined} color="gray">
              buy now
            </Button>
          </div>
          <IconButton
            placeholder={undefined}
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>
                <RectangleStackIcon className="h-5 w-5" />
                Pages
              </NavItem>
              <NavItem>
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
              <NavItem>
                <Squares2X2Icon className="h-5 w-5" />
                Blocks
              </NavItem>
              <NavItem>
                <CommandLineIcon className="h-5 w-5" />
                Docs
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button placeholder={undefined} variant="text" onClick={handleOnLoginClick}>
                Log in
              </Button>
              <Button placeholder={undefined} color="gray" onClick={handleOnRegisterClick}>
                buy now
              </Button>
            </div>
          </div>
        </Collapse>
      </Navbar>
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography
              placeholder={undefined}
              className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary"
            >
              Exciting News! Introducing our latest innovation
            </Typography>
            <Typography
              placeholder={undefined}
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Get ready to experience a new level of <span className="text-green-500 leading-snug ">performance</span>{" "}
              and <span className="leading-snug text-green-500">functionality</span>.
            </Typography>
            <Typography
              placeholder={undefined}
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright color. For standing out.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input
                  crossOrigin={undefined}
                  placeholder={undefined}
                  color="gray"
                  label="Enter your email"
                  size="lg"
                />
                <Button placeholder={undefined} color="gray" className="w-full px-4 md:w-[12rem]">
                  get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
