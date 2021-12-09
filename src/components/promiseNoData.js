export default function promiseNoData(promise, data, error) {

	if (!promise && !data && !error) 
	{
		return <div></div>
	}
	else if (promise && !data && !error) 
	{
		return <img src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"></img>;
	} 
	else if (error) 
	{
		return <span>{error}</span>;
	}
}
