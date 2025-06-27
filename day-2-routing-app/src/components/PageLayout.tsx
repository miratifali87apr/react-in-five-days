type Props = {
    children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "calc(100vh - 64px)", // adjust for navbar height
                padding: "2rem",
                boxSizing: "border-box",
            }}
        >
            {children}
        </div>
    );
};

export default PageLayout;
