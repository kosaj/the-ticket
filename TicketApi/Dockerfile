FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as build-env
WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR /app
COPY --from=build-env /src/out .

ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false

ENTRYPOINT [ "dotnet", "TicketApi.dll" ]