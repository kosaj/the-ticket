FROM		mcr.microsoft.com/dotnet/sdk:6.0-alpine as build-env
WORKDIR		/src

RUN			apk add --no-cache icu-libs
ENV			DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

COPY		*.csproj ./
RUN			dotnet restore

COPY		. .
RUN			dotnet build -c Release -o /app
RUN			dotnet tool install --global dotnet-ef
ENV			PATH="${PATH}:/root/.dotnet/tools"
RUN			dotnet ef database update

FROM		build-env AS publish
RUN			dotnet publish -c Release -o out

FROM		mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR		/src
COPY		--from=publish /src/out .

RUN			apk add --no-cache icu-libs
ENV			DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

ENTRYPOINT	[ "dotnet", "TicketApi.dll" ]